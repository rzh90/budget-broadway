import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'

const Users = () => {
    const session = useSession()
    const supabase = useSupabaseClient()
    const customTheme = {
        default: {
            colors: {
                brand: '#00a3dd',
                brandAccent: '#00bcff',
                brandButtonText: 'white',
                inputBorder: 'gray',
                defaultButtonBorder: 'gray',
            },
            space: {
                inputPadding: '8px 10px',
                buttonPadding: '8px 10px',
            },
            fonts: {
                bodyFontFamily: 'Golos Text',
                buttonFontFamily: 'Golos Text',
                inputFontFamily: 'Golos Text',
                labelFontFamily: 'Golos Text',
            },
            fontSizes: {
                baseBodySize: '13px',
                baseInputSize: '14px',
                baseLabelSize: '14px',
                baseButtonSize: '14px',
            },
            borderWidths: {
                buttonBorderWidth: '1px',
                inputBorderWidth: '1px',
            },
            radii: {
                borderRadiusButton: '4px',
                buttonBorderRadius: '4px',
                inputBorderRadius: '4px',
            },
        }
    }

    return (
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
            {!session ? ( <Auth supabaseClient={supabase} appearance={{ theme: customTheme }} providers={[]} /> ) : ( <Account session={session} /> )}
        </div>
    )
}

export default Users