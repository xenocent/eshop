import React from 'react';
import {Box,  Heading,  Skeleton, Text, Wrap, WrapItem} from '@chakra-ui/react';

const Landing = (props) =>{
    return <div style={{flex:1}}>
        <Box>
            <Skeleton>
                <Box width="100%" height="400"></Box>
            </Skeleton>
        </Box>
        
        <Box>
            <Wrap justify="center" p={10}>
                <WrapItem boxShadow="xl" maxW='md' borderWidth='1px' borderRadius='lg' >
                    <Skeleton>
                        <Box width={400} height={400}></Box>
                    </Skeleton>
                </WrapItem>                                
                <WrapItem display={"flex"} flexDirection="column" p={5} maxW='800'>
                    <Heading as={'b'} size='xl' p={2}>HAUGA V.2</Heading>
                    <Heading as={'b'} size='2xl' color={'gray'} p={2}>Mr. DIY | Bedroom</Heading>

                    <Text p={2}>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                    </Text>
                </WrapItem>
            </Wrap>
        </Box>
        <Box >
            <Wrap justify="center" p={10}>
                <WrapItem boxShadow="xl" maxW='md' borderWidth='1px' borderRadius='lg'>
                    <Skeleton>
                        <Box width={400} height={400}></Box>
                    </Skeleton>
                </WrapItem>                                
                <WrapItem display={"flex"} flexDirection="column" p={5} maxW='800'>
                    <Heading as={'b'} size='xl' p={2}>HAUGA V.2</Heading>
                    <Heading as={'b'} size='2xl' color={'gray'} p={2}>Mr. DIY | Bedroom</Heading>

                    <Text p={2}>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                    </Text>
                </WrapItem>
            </Wrap>
        </Box>
        <Box >
            <Wrap justify="center" p={10}>
                <WrapItem boxShadow="xl" maxW='md' borderWidth='1px' borderRadius='lg'>
                    <Skeleton>
                        <Box width={400} height={400}></Box>
                    </Skeleton>
                </WrapItem>                                
                <WrapItem display={"flex"} flexDirection="column" p={5} maxW='800'>
                    <Heading as={'b'} size='xl' p={2}>HAUGA V.2</Heading>
                    <Heading as={'b'} size='2xl' color={'gray'} p={2}>Mr. DIY | Bedroom</Heading>

                    <Text p={2}>
                    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                    sentence that contains all of the letters of the English alphabet. Owing to
                    its existence, Chakra was created.
                    </Text>
                </WrapItem>
            </Wrap>
        </Box>
    </div>
}

export default Landing