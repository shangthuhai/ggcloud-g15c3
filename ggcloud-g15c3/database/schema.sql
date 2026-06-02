CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(32) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  category VARCHAR(64) NOT NULL,
  category_label VARCHAR(128) NOT NULL,
  image VARCHAR(255),
  image_alt VARCHAR(255),
  stock INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customers (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(32),
  address TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  customer_id BIGINT UNSIGNED,
  reference_number VARCHAR(64) NOT NULL UNIQUE,
  payment_provider VARCHAR(32),
  payment_status VARCHAR(32) NOT NULL DEFAULT 'pending',
  subtotal INT NOT NULL DEFAULT 0,
  shipping_fee INT NOT NULL DEFAULT 0,
  discount INT NOT NULL DEFAULT 0,
  total INT NOT NULL DEFAULT 0,
  zoho_inventory_sales_order_id VARCHAR(64),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS order_items (
  id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT UNSIGNED NOT NULL,
  product_id VARCHAR(32),
  product_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unit_price INT NOT NULL,
  line_total INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_order_items_order
    FOREIGN KEY (order_id) REFERENCES orders(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_order_items_product
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE SET NULL
);

INSERT INTO products
  (id, name, price, category, category_label, image, image_alt, stock)
VALUES
  ('st-001', 'So tay Linen 180 trang', 125000, 'so-tay', 'So tay', '/images/products/notebook-linen.svg', 'So tay Linen', 100),
  ('st-002', 'So tay Dot Grid A5', 98000, 'so-tay', 'So tay', '/images/products/notebook-dot.svg', 'So tay Dot Grid', 100),
  ('bt-001', 'But gel 0.5 Minimal', 36000, 'but', 'But', '/images/products/pen-gel.svg', 'But gel Minimal', 200),
  ('bt-002', 'But ky kim loai', 69000, 'but', 'But', '/images/products/pen-metal.svg', 'But ky kim loai', 150),
  ('cb-001', 'Combo Qua tang 100K', 99000, 'combo-qua-tang', 'Combo', '/images/products/gift-100.svg', 'Combo qua tang 100K', 80),
  ('cb-002', 'Combo Qua tang 200K', 199000, 'combo-qua-tang', 'Combo', '/images/products/gift-200.svg', 'Combo qua tang 200K', 60),
  ('cb-003', 'Combo Qua tang 500K', 499000, 'combo-qua-tang', 'Combo', '/images/products/gift-500.svg', 'Combo qua tang 500K', 40),
  ('lc-001', 'Lich Desk Planner 2026', 129000, 'lich', 'Lich', '/images/products/calendar.svg', 'Lich Desk Planner', 100)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  price = VALUES(price),
  category = VALUES(category),
  category_label = VALUES(category_label),
  image = VALUES(image),
  image_alt = VALUES(image_alt),
  stock = VALUES(stock);
