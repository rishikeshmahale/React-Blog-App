import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/authContext';
import { SidebarProvider } from './context/sidebarContext';
import { BlogsProvider } from './context/blogsContext';
import { UserProvider } from './context/userContext';
import { CommentProvider } from './context/commentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <SidebarProvider>
      <UserProvider>
          <BlogsProvider>
              <CommentProvider>
                  <App />
              </CommentProvider>
          </BlogsProvider>
      </UserProvider>
  </SidebarProvider>
</AuthProvider>
)
