import Link from "next/link";

const footerStyle: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  textDecoration:'none',
};

const footerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  textDecoration: "none",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

const columnStyle: React.CSSProperties = {
  flex: '1',
  minWidth: '200px',
  margin: '10px',
  textDecoration:'none',
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  textDecoration: "none",
};

const footerBottomStyle: React.CSSProperties = {
  borderTop: "1px solid #444",
  marginTop: "20px",
  padding: "10px 0",
  textDecoration: "none",
};


export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={columnStyle}>
          <h3>Company</h3>
          <ul style={listStyle}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3>Support</h3>
          <ul style={listStyle}>
            <li>
              <Link href="/help">Help Center</Link>
            </li>
            <li>
              <Link href="/returns">Returns</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping</Link>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3>Follow Us</h3>
          <ul style={listStyle}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
