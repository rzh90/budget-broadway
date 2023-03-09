import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'

const Watchlist = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    // Supabase auth UI theme
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
        <>
            {!session ? (
                <div className="flex justify-center">
                    <div className="w-full lg:w-1/3" style={{ padding: "50px 0 100px 0" }}>
                        <Auth supabaseClient={supabase} appearance={{ theme: customTheme }} providers={[]} />
                    </div>
                </div>
            )
            : (
                <Account session={session} />
            )}
        </>
    )
}

export default Watchlist