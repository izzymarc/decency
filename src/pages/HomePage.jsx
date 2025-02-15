
import React from 'react';
import { Link } from 'react-router-dom';
import QualityIcon from '../assets/quality-icon.png';
import SelectionIcon from '../assets/selection-icon.png';
import ServiceIcon from '../assets/service-icon.png';
import SecurityIcon from '../assets/security-icon.png';
import AboutUsImage from '../assets/about-us-image.jpg';

function HomePage() {
  // Featured products data
  const featuredProducts = [
    { id: 1, name: 'Silky Straight Bundles', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1599449488388-02c620f320f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw2fHxzdHJhaWdodCUyMGhhaXIlMjBidW5kbGVzfGVufDB8fHx8MTY5NzYxMDY3N3ww&ixlib=rb-4.0.3&q=80&w=300' },
    { id: 2, name: 'Premium Lace Front Wig', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1623357982198-935006c94ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwxfHxMYWNlJTIwRnJvbnQlMjBXaWd8ZW58MHf