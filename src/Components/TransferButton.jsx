import styles from '../Styles/SmallTransBox.module.css'
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

export const TransferButton = ({setAmt,amt}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleTransfer = () => {
    setAmt(0)
    onClose();
  }
  const cancelRef = React.useRef()
  return (
    <>
      <Button id={styles.openBtn} onClick={onOpen}>Transfer</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Payment Confirmation</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            { amt == 0 ? "You Cannot make payment of 0$" : `Are you sure you want to make payment of $${amt } ?`}
            
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={amt==0} colorScheme='green' onClick={handleTransfer} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
