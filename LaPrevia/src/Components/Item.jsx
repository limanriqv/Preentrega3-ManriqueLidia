import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  import {Link} from 'react-router-dom';
  
  
  const Item = ({id, title, price, img}) =>  {
    return (
      <Center py={12} style={{margin: "10px"}}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'green.600')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Link to={`/item/${id}`}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
            </Link>
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.600'} fontSize={'sm'} textTransform={'uppercase'}>
              id:{id}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={400}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={700} fontSize={'xl'}>
                ${price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }

export default Item