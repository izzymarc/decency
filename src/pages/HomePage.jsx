
import React from 'react';
import { Link } from 'react-router-dom';
import QualityIcon from '../assets/quality-icon.png'; // Import icons
import SelectionIcon from '../assets/selection-icon.png';
import ServiceIcon from '../assets/service-icon.png';
import SecurityIcon from '../assets/security-icon.png';
import AboutUsImage from '../assets/about-us-image.jpg'; // Import about us image

function HomePage() {
  // Featured products data
  const featuredProducts = [
    { id: 1, name: 'Silky Straight Bundles', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1599449488388-02c620f320f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw2fHxzdHJhaWdodCUyMGhhaXIlMjBidW5kbGVzfGVufDB8fHx8MTY5NzYxMDY3N3ww&ixlib=rb-4.0.3&q=80&w=300' },
    { id: 2, name: 'Premium Lace Front Wig', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1623357982198-935006c94ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwxfHxMYWNlJTIwRnJvbnQlMjBXaWd8ZW58MHx8fHx8MTY5NzYxMDc1OHww&ixlib=rb-4.0.3&q=80&w=300' },
    { id: 4, name: 'Voluminous Body Wave Extensions', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1615123725904-9e7741975441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwzOHx8aGFpclxlbnwwfHx8fDE2OTc2MTA5MTZ8MA&ixlib=rb-4.0.3&q=80&w=300' },
  ];

  // Product categories data
  const productCategories = [
    { name: 'Wigs', imageUrl: 'https://images.unsplash.com/photo-1592849978613-1c199441b867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHx3aWdzJTIwc2V0fGVufDB8fHx8MTY5NzYwNzY0OHww&ixlib=rb-4.0.3&q=80&w=300', link: '/products?category=wigs' },
    { name: 'Bundles', imageUrl: 'https://images.unsplash.com/photo-1623228732934-a72a06144991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxIZWFkJTIwV2VhdmVzfGVufDB8fHx8MTY5NzYwNzc0OHww&ixlib=rb-4.0.3&q=80&w=300', link: '/products?category=bundles' },
    { name: 'Closures & Frontals', imageUrl: 'https://images.unsplash.com/photo-1670872499909-9919bb994388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHkyfHxMYWNlJTIwQ2xvc3VyZXN8ZW58MHf