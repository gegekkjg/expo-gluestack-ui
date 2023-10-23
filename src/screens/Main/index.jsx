import { Box, Center, FormControl, FormControlLabel, FormControlLabelText, Heading, Input, InputField, Text } from "@gluestack-ui/themed";


export default function Main(){
    return <Box bg="$primary100" p="$2" h={200} w={300}>
        <Center h={"$full"}>
            <Heading>Peso Ideal</Heading>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>
                        Peso
                    </FormControlLabelText>
                </FormControlLabel>
                <Input w={"$full"}>
                    <InputField />
                </Input>
            </FormControl>
        </Center>
    </Box>
}