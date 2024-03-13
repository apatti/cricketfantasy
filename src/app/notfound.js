import { ThemeProvider } from '@aws-amplify/ui-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <ThemeProvider>
      <Flex direction="column" justifyContent="center" gap="20px" width="100%"
      alignItems="left">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <a>Go back to Home</a>
        </Link>
      </Flex>
      </ThemeProvider>
    
  )
}