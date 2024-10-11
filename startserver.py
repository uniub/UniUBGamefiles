import http.server
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer  # Use ThreadingHTTPServer
import webbrowser

# Define the handler that adds CORS headers
class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add the required CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow all origins (for dev)
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
        super().end_headers()

# Specify the port
PORT = 19370

# Use ThreadingHTTPServer for handling multiple requests simultaneously
with ThreadingHTTPServer(("", PORT), CORSRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    
    # Open the URL in the default web browser
    webbrowser.open(f"http://localhost:{PORT}")
    
    # Keep the server running
    httpd.serve_forever()
