import bracelet from './css/images/merch/bracelet1.jpg';
import shirt from './css/images/merch/shirt1.jpg';
import shirt2 from './css/images/merch/merch2.jpeg';

export const productDetails = [
  {
    id: 0,
    image: shirt,
    name: 'T-Shirt',
    price: '10.00',
    snipcartData: {
      label: 'Add to Cart',
      itemId: '1',
      itemName: 'Yes Devil T-Shirt (Style 1)',
      itemPrice: '10.00',
      itemWeight: '135',
      itemUrl: 'http://www.yesdevil.com',
      itemDesc: 'Black shirt with YES DEVIL printed on the front.',
      isShippable: true,
      custom2Name: 'Size',
      custom2options: 'Small|Medium|Large|X-Large',
      itemImg: shirt
    }
  },
  {
    id: 1,
    image: shirt2,
    name: 'T-Shirt',
    price: '10.00',
    snipcartData: {
      label: 'Add to Cart',
      itemId: '2',
      itemName: 'Yes Devil T-Shirt (Style 2)',
      itemPrice: '10.00',
      itemWeight: '135',
      itemUrl: 'http://www.yesdevil.com',
      itemDesc: 'Black shirt with Yes Devil Skull Logo printed on the front.',
      isShippable: true,
      custom2Name: 'Size',
      custom2options: 'Small|Medium|Large|X-Large',
      itemImg: shirt2
    }
  },
  {
    id: 2,
    image: bracelet,
    name: 'Wristband',
    price: '3.00',
    snipcartData: {
      label: 'Add to Cart',
      itemId: '3',
      itemName: 'Yes Devil Wristband',
      itemPrice: '3.00',
      itemWeight: '20',
      itemUrl: 'http://www.yesdevil.com',
      itemDesc: 'Black wristband with "YES DEVIL" printed on the front and "The High Cost of Living Low" on the back.',
      isShippable: true,
      custom2Name: 'Size',
      custom2options: 'Small|Medium|Large|X-Large',
      itemImg: bracelet
    }
  }
];