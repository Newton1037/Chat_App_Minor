import React, { useState } from 'react'
import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack} from '@chakra-ui/react'

const Signup = () => {
  
  const [show , setShow] = useState(false)
  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [confirmpassword , setConfirmpassword] = useState()
  const [pic , setPic] = useState()

  const handleClick = () => setShow(!show)

  const postDetails = () => {

  }

  const submitHandler= () => {

  }

  return (
    <VStack spacing="5px">

      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
          placeholder="Enter your name" 
          onChange={(e) => setName(e.target.value)}        
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder="Enter your email" 
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input 
            type={show ? "text" : "password"}
            placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input 
            type={show ? "text" : "password"}
            placeholder="Confirm your password" 
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input 
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        color="white"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
       Sign Up
      </Button>

    </VStack>
  )
}

export default Signup
