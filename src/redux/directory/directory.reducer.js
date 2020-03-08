const INITIAL_STATE = 
{sections: [
    {
      title: 'kitchen',
      imageUrl: 'https://i.ibb.co/WGfRv04/edgar-castrejon-CX8ooha2y-LA-unsplash.jpg',
      id: 1,
      linkUrl: 'kitchen'
    },
    {
      title: 'bathroom',
      imageUrl: 'https://i.ibb.co/r2rvvQR/superkitina-r-CT928-GIbo-M-unsplash.jpg',
      id: 2,
      linkUrl: 'bathroom'
    },
    {
      title: 'cleaning',
      imageUrl: 'https://i.ibb.co/zNFXhPJ/lina-verovaya-A-XUPiy-POvg-unsplash.jpg',
      id: 3,
      linkUrl: 'cleaning'
    },
    {
      title: 'baby',
      imageUrl: 'https://i.ibb.co/892vwzw/minnie-zhou-0hi-UWSi7jvs-unsplash.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'baby'
    },
    {
      title: 'clothing',
      imageUrl: 'https://i.ibb.co/7pvch9K/photo-1490481651871-ab68de25d43d.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'clothing'
    }
  ]
}

  const directoryReducer = (state = 
    INITIAL_STATE, action) => {
        switch(action.type) {
            default: 
            return state
        }
    }

    export default directoryReducer