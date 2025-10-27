INSERT INTO products (sku, name, brand, category, subcategory, price, rating, stock, description, image, images, specs)
VALUES
  (
    'CH-STD-001',
    'Ergonomic Office Chair',
    'ErgoSeat',
    'Furniture',
    'Chairs',
    149.99,
    4.5,
    25,
    'Adjustable lumbar support and breathable mesh back.',
    '/images/furniture/chair-1-main.jpg',
    JSON_ARRAY(JSON_OBJECT('url','/images/furniture/chair-1-main.jpg','alt','Front view','type','main'), JSON_OBJECT('url','/images/furniture/chair-1-side.jpg','alt','Side view','type','side')),
    JSON_OBJECT('material','Mesh','color','Black')
  ),
  (
    'SH-RUN-AD-001',
    'Adidas RunPro',
    'Adidas',
    'Shoes',
    'Running',
    119.00,
    4.6,
    40,
    'Lightweight running shoes for daily training.',
    '/images/shoes/adidas-runpro-main.jpg',
    JSON_ARRAY(JSON_OBJECT('url','/images/shoes/adidas-runpro-main.jpg','alt','Front','type','main'), JSON_OBJECT('url','/images/shoes/adidas-runpro-sole.jpg','alt','Sole','type','detail')),
    JSON_OBJECT('gender','Men','size','8-12')
  );
