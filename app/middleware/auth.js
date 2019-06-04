import { Auth } from 'aws-amplify'

export default async ({ route, redirect }) => {
    if ( route.path !== "/signin" ) {
      await Auth.currentAuthenticatedUser({bypassCache: false })
        .then(user => console.log('You are signed in.' ))
        .catch(err => console.log('You are not signed in.') || redirect('/signin') )
    };
}