-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id            BIGSERIAL PRIMARY KEY,
  sku           TEXT UNIQUE,
  name          TEXT NOT NULL,
  brand         TEXT,
  category      TEXT,
  subcategory   TEXT,
  price         NUMERIC(10,2) NOT NULL DEFAULT 0,
  rating        NUMERIC(2,1),
  stock         INTEGER NOT NULL DEFAULT 0,
  description   TEXT,
  image         TEXT,
  images        JSONB,
  specs         JSONB,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_price ON products(price);
CREATE INDEX IF NOT EXISTS idx_products_subcategory ON products(subcategory);
