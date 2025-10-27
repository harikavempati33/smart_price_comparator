CREATE TABLE IF NOT EXISTS products (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  sku VARCHAR(191) UNIQUE,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(191),
  category VARCHAR(191),
  subcategory VARCHAR(191),
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  rating DECIMAL(3,1),
  stock INT NOT NULL DEFAULT 0,
  description TEXT,
  image TEXT,
  images JSON,
  specs JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_subcategory ON products(subcategory);
