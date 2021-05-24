export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  role: string;
  deleted: number;
  created_at: Date;
  updated_at: Date;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  low_stock: number;
  optimal_stock: number;
  barcode: string;
  category_id: number;
  created_at?: any;
  updated_at?: any;
}

export interface InvoiceProduct {
  id: number;
  quantity: number;
  price: number;
  total: number;
  product_id: number;
  invoice_id: number;
  created_at: Date;
  updated_at: Date;
  product: Product;
}

export interface Invoice {
  id: number;
  created_at: Date;
  updated_at: Date;
  total: number;
  is_paid: number;
  user_id: number;
  shift_id: number;
  user: User;
  invoice_products: InvoiceProduct[];
}

export interface AllInvoicesRes {
  current_page: number;
  data: Invoice[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}
