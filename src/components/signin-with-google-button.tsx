import { IconBrandGoogle } from "@tabler/icons-react";
import { Button } from "./inputs";


export default function SigninWithGoogleButton() {
    return (
        <Button variant="outlined" label="Login with google" leftIcon={<IconBrandGoogle />} fullWidth />
    )
}

