# Budget Broadway
<div id="screenshot" align="center" style="background-color: #000;">
    <img src="https://user-images.githubusercontent.com/52875611/211209349-ba55e5a7-3620-494c-8f95-f222953894cd.png" width="500px">
    <p>https://budgetbroadway.netlify.app/</p>
    <p>Information about discounted tickets for musicals and plays on Broadway</p>
</div>

## How to use
Visit https://budgetbroadway.netlify.app/ to use the app.

## Development
1. Clone the repo.
2. Copy `.env.example` and save as `.env`
3. Go to [Supabase](https://supabase.com/) and open the project. Go to **Project Settings** > **API** to find the *project URL* and *anon API key*. Add them to the `.env` file.
```
NEXT_PUBLIC_SUPABASE_URL=project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon API key
```
4. `npm i`
5. `npm run dev`
6. Open http://localhost:3000 with your browser to see the result.

## How it's made
**Tech used:** Next.js, Supabase, Tailwind CSS

## Optimizations
Features to implement:
- User profiles
- Watch lists

## Lessons learned
Best practices for creating an application with Next.js.
