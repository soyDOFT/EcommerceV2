import { useLocation } from 'react-router-dom';

export default function Details() {
    const location = useLocation();
    const { from, product } = location.state;
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
