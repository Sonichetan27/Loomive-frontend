const phoneNumber = "918770932665";

const handleWhatsApp = () => {
  const message = `
Hi Loomiva,
I want to customize a product.
Please guide me further.
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
