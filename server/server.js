const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Silky Straight Bundles', description: 'Experience the ultimate sleekness with our silky straight hair bundles. Perfect for a sophisticated and polished look.', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1599449488388-02c620f320f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw2fHxzdHJhaWdodCUyMGhhaXIlMjBidW5kbGVzfGVufDB8fHx8MTY5NzYxMDY3N3ww&ixlib=rb-4.0.3&q=80&w=300', category: 'bundles', relatedProductIds: [4, 5, 7] },
  { id: 2, name: 'Premium Lace Front Wig', description: 'Achieve a flawless hairline and versatile styling with our premium quality lace front wig. Easy to customize and style.', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1623357982198-935006c94ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwxfHxMYWNlJTIwRnJvbnQlMjBXaWd8ZW58MHx8fHx8MTY5NzYxMDc1OHww&ixlib=rb-4.0.3&q=80&w=300', category: 'wigs', relatedProductIds: [3, 6, 8] },
  { id: 3, name: 'Natural Wave Closure', description: 'Enhance your hairstyle with our natural wave hair closure for seamless blending and a realistic finish.', price: 60.00, imageUrl: 'https://images.unsplash.com/photo-1607082349566-187342175e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxDbG9zdXJlJTIwV2lnfGVufDB8fHx8MTY5NzYxMDg0OHww&ixlib=rb-4.0.3&q=80&w=300', category: 'closures', relatedProductIds: [2, 6, 9] },
  { id: 4, name: 'Voluminous Body Wave Extensions', description: 'Add incredible volume and bounce to your hair with our luxurious body wave hair extensions. Perfect for everyday glam.', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1615123725904-9e7741975441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwzOHx8aGFpclxlbnwwfHx8fDE2OTc2MTA5MTZ8MA&ixlib=rb-4.0.3&q=80&w=300', category: 'extensions', relatedProductIds: [1, 5, 10] },
  { id: 5, name: 'Deep Curly Weave', description: 'Get glamorous, head-turning curls with our deep curly hair weave for a stunning and bold look.', price: 110.00, imageUrl: 'https://images.unsplash.com/photo-1587397299496-c992645d3c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw0fHxjdXJseSUyMGhhaXIlMjB3ZWF2ZXxlbnwwfHx8fDE2OTc2MTEwMDZ8MA&ixlib=rb-4.0.3&q=80&w=300', category: 'weaves', relatedProductIds: [1, 4, 11] },
  { id: 6, name: 'Trendy Afro Clip-Ins', description: 'Transform your hair instantly with our trendy and easy-to-use afro clip-ins. Add volume and texture in minutes.', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1594212684848-4a42989c9823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxhZnJvfGVufDB8fHx8MTY5NzYxMTA4N3ww&ixlib=rb-4.0.3&q=80&w=300', category: 'clip-ins', relatedProductIds: [2, 3, 12] },
  { id: 7, name: 'Honey Blonde Highlight Bundles', description: 'Add warmth and dimension with our honey blonde highlight bundles. Perfect for adding subtle color.', price: 120.00, imageUrl: 'https://images.unsplash.com/photo-1605494858494-4ff844931a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw0fHxibG9uZGUlMjBoYWlyfGVufDB8fHx8MTY5NzYxMTYwNHww&ixlib=rb-4.0.3&q=80&w=300', category: 'bundles', relatedProductIds: [1, 8, 9] },
  { id: 8, name: 'Ombre Lace Wig', description: 'Make a statement with our stylish ombre lace wig, transitioning from dark roots to light ends.', price: 190.00, imageUrl: 'https://images.unsplash.com/photo-1623357982341-4dd58050e755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxvbmJyZSUyMHdpZ3xlbnwwfHx8fDE2OTc2MTE2ODZ8MA&ixlib=rb-4.0.3&q=80&w=300', category: 'wigs', relatedProductIds: [2, 7, 10] },
  { id: 9, name: 'Invisible Part Closure', description: 'Achieve a super natural part with our invisible part closure, mimicking a real scalp.', price: 70.00, imageUrl: 'https://images.unsplash.com/photo-1670872499787-7c6445bb9889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw1fHxMYWNlJTIwQ2xvc3VyZXN8ZW58MHx8fHx8MTY5NzYxMTc1N3ww&ixlib=rb-4.0.3&q=80&w=300', category: 'closures', relatedProductIds: [3, 7, 11] },
  { id: 10, name: 'Loose Wave Ponytail Extension', description: 'Add instant length and style with our easy-to-attach loose wave ponytail extension.', price: 55.00, imageUrl: 'https://images.unsplash.com/photo-1627530873137-4c9b411d753d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw1fHxwb255dGFpbCUyMGhhaXIlMjBleHRlbnNpb25zfGVufDB8fHx8MTY5NzYxMTgzN3ww&ixlib=rb-4.0.3&q=80&w=300', category: 'extensions', relatedProductIds: [4, 8, 12] },
  { id: 11, name: 'Reddish Brown Weave', description: 'Spice up your look with our vibrant reddish brown hair weave, adding warmth and richness.', price: 100.00, imageUrl: 'https://images.unsplash.com/photo-1599449502538-5da585434bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxSZWRkaXNoJTIwYnJvd24lMjBoYWlyfGVufDB8fHx8MTY5NzYxMTkxNXww&ixlib=rb-4.0.3&q=80&w=300', category: 'weaves', relatedProductIds: [5, 9, 10] },
  { id: 12, name: 'Blonde Kinky Clip-Ins', description: 'Go bold with our blonde kinky clip-ins, perfect for adding texture and a pop of color.', price: 80.00, imageUrl: 'https://images.unsplash.com/photo-1634472449838-533408474d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyNXx8d2lnc3xlbnwwfHx8fDE2OTc2MDY2MTR8MA&ixlib=rb-4.0.3&q=80&w=300', category: 'clip-ins', relatedProductIds: [6, 10, 11] },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(\`Server listening at http://localhost:\${port}\`);
});
