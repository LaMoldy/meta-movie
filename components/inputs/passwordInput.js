import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'

const PasswordInput = ({ inputEvent, inputName, inputValue, inputOnKeyUp }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

  return (
    <InputGroup mb={3}>
      <Input
        placeholder="Password"
        focusBorderColor="none"
        bgColor="white"
        borderRadius={1}
        data-testid="loginPassword"
        type={showPassword ? 'text' : 'password'}
        onChange={inputEvent}
        onKeyUp={inputOnKeyUp}
        value={inputValue}
        name={inputName}
      />
      <InputRightElement w="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {showPassword ? (
            <ViewOffIcon boxSize={6}></ViewOffIcon>
          ) : (
            <ViewIcon boxSize={6}></ViewIcon>
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
