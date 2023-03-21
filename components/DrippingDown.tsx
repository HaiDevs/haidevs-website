import { Box } from "@chakra-ui/react";
import React from "react";


export const DrippingDown: React.FC = () => {
    return (
      <Box sx={{
        'div': {
          position: 'absolute',
          bottom: '100px',
          left: '50%',
        },
        "& .chevron": {
          position: 'absolute',
          width: '28px',
          height: '8px',
          opacity: '0',
          transform: 'scale3d(0.5, 0.5, 0.5)',
          animation: 'move 3s ease-out infinite',
          '&:first-of-type': {
            animation: 'move 3s ease-out 1s infinite'
          },
          ':nth-of-type(2)': {
            animation: 'move 3s ease-out 2s infinite'
          },
          '&:before, &: after': {
            content: '""',
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '51%',
            background: '#fff',
          },
          '&:before': {
            left: 0,
            transform: 'skew(0deg, 30deg)'
          },
          '&:after': {
            right: 0,
            width: '50%',
            transform: 'skew(0deg, -30deg)'
          }
  
        },
        "@keyframes move": {
          "25%": {
            opacity: 1,
          },
          "33%": {
            opacity: 1,
            transform: 'translateY(30px)',
          },
          "67%": {
            opacity: 1,
            transform: 'translateY(40px)',
          },
          "100%": {
            opacity: 0,
            transform: 'translateY(55px) scale3d(0.5, 0.5, 0.5)',
          }
        }
      }}><>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </>
      </Box >
    )
}