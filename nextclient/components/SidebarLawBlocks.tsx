import React from "react";
import {
  Box,
  Heading,
  Collapse,
  useDisclosure,
  useBreakpointValue,
  Button,
  Center
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

type Props = {
  children: React.ReactNode
  title: string
  fixContent?: boolean
}


export default function SidebarLawBlocks({ children, title, fixContent }: Props) {
  const { isOpen, onToggle } = useDisclosure()
  const isOpenResponsive = useBreakpointValue({ base: isOpen, md: isOpen, lg: true })
  const sidebarHeight = useBreakpointValue({ base: 'auto', md: 'auto', lg: '100vh' })


  return (
    <Box
      bg="#f2f1ef"
      width={{ sm: "auto", md: "450px" }}
      position={{ sm: "relative", md: "sticky" }}
      top={{ sm: "0", md: "60px" }}
      alignItems="start"
      justifyItems="start"
      justifyContent="start"
      padding={["4", "2", "8"]}
      height={fixContent ? sidebarHeight : "auto"}

    >
      <Button variant='outline' onClick={() => onToggle()} display={["block", "block", "none"]}>
        <Center>
          {isOpenResponsive ? <CloseIcon /> : <HamburgerIcon />}
        </Center>
      </Button>

      <Collapse in={isOpenResponsive} animateOpacity >

        <Heading as="h1" fontSize={["xl", "xl", "3xl"]} fontWeight="bold" pb="5">
          {title}
        </Heading >
        <Box height="100%">
          {children}
        </Box>

      </Collapse>

    </Box>
  )
}