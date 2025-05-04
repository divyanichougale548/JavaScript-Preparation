// src/FormComponent.js
import React from 'react';
import { Box, Text, Input, FormControl, FormErrorMessage, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// Custom Input Component
const CustomInput = ({ error, ...props }) => (
  <FormControl isInvalid={!!error}>
    <Input {...props} />
    <FormErrorMessage>{error && error.message}</FormErrorMessage>
  </FormControl>
);

// Helper function to generate errors for nested fields
const generateErrorForNestedField = (formState, parentFieldName, childFieldName) => {
  const error = formState.errors?.[parentFieldName]?.[childFieldName];
  return error ? error : null;
};

const FormComponent = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      indicator_params: {
        offset: '',
        period: '',
      },
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const offsetError = generateErrorForNestedField(formState, 'indicator_params', 'offset');
  const periodError = generateErrorForNestedField(formState, 'indicator_params', 'period');

  return (
    <Box maxW="500px" mx="auto" mt="50px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={4}>
          <Text color="gray.500" fontSize="1.1rem" mb={2}>
            Offset
          </Text>
          <CustomInput
            name="indicator_params.offset"
            {...register('indicator_params.offset', { required: 'Offset is required' })}
            error={offsetError}
            value={watch('indicator_params.offset')}
            type="number"
            step="1"
          />
        </Box>

        <Box mb={4}>
          <Text color="gray.500" fontSize="1.1rem" mb={2}>
            Period
          </Text>
          <CustomInput
            name="indicator_params.period"
            {...register('indicator_params.period', { required: 'Period is required' })}
            error={periodError}
            value={watch('indicator_params.period')}
            type="number"
            step="1"
          />
        </Box>

        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormComponent;
