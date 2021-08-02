import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductAsync,
  selectProducts,
  selectIsLoading,
} from './productSlice';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Loading from '../../components/LoadingComponent.jsx';
import '../../components/style.css';

export function Product() {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: '10px'

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductAsync(''));
  }, [dispatch]);

  return (
    <>
      {
        products === [] || isLoading === true ? <Loading /> :
          <div className={'product-div'}>
            <h2 className={'title-text'}>Latest Products</h2>
            <Card className={classes.root}>
              <CardContent>
                {
                  products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className={'parent-div'}
                      >
                        <div className={'sub-div'}>
                          <a href={product.discussion_url.split('?')[0]}>
                            <img src={product.thumbnail.image_url} className={'video-rt'} alt="product" />
                          </a>
                          <div className={'sub-parent-div'}>
                            <h4>{product.name}</h4>
                            <a className={'a-child'} href={product.discussion_url.split('?')[0]}>{product.tagline}</a>
                            <div className={'child-div'}>
                              <div className={'child-div-rt'}>
                                <a className={'a-child'} href={product.discussion_url.split('?')[0]}>
                                  <span className={'custom-span'}>{product.comments_count}</span>
                                </a>
                                <span className={'custom-span custom-border-rt'}>Free</span>
                                <a className={'a-child'} href={product.discussion_url.split('?')[0]}>
                                  <span className={'custom-span'}>{product.topics[0].name}</span>
                                </a>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className={'sub-div-right'}>
                          <Button className={'custom-button'}>
                            <span>{product.votes_count}</span>
                          </Button>
                        </div>
                      </div>
                    )
                  })
                }
              </CardContent>
            </Card>
          </div>
      }

    </>
  );
}
