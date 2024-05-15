import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <img src="/logo.png" alt={`${CONFIG.blog.title} logo`} />
      <span>{CONFIG.blog.title}</span>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex; /* Use flexbox */
  align-items: center; /* Align items vertically */

  img {
    max-height: 1.5em; /* Matches the line-height of the span (or close to it) */
    margin-right: 0.5rem; /* Space between image and title */
  }

  span {
    font-size: 1rem; /* Adjust font size as needed */
    line-height: 1; /* Make the line-height equal to the font size */
    color: ${({ theme }) => theme.colors.primary}; /* Example styling */
  }
`
