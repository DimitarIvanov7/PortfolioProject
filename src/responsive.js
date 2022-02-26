import {css} from 'styled-components'

export const desktop = (props) => {
    return css`
        @media only screen and (max-width: 1024px) {
            ${props}
        }
    `
}

export const bigTablet = (props) => {
    return css`
        @media only screen and (max-width: 730px) {
            ${props}
        }
    `
}

export const phone = (props) => {
    return css`
        @media only screen and (max-width: 470px) {
            ${props}
        }
    `
}