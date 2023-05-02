<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

	export let data

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
</script>

<div class="flex justify-center">
    <div class="w-full lg:w-1/3 login">
		<Auth
			supabaseClient={data.supabase}
            view="magic_link"
            showLinks={false}
			redirectTo={`${data.url}/logging-in?redirect=/`}
			appearance={{ theme: customTheme, style: { input: 'color: #fff' } }}
		/>
    </div>
</div>

<style>
    .login {
        padding: 20px 0 100px 0;
    }
</style>