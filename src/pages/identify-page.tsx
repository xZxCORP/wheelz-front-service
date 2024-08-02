import { Outlet, Link } from "react-router-dom";

export default function IdentifyPage() {
    return (
        <>
            <div>
                <form id="search-form" role="search">
                    <input
                        id="q"
                        aria-label="Search VIM"
                        placeholder="[EXAMPLE VIM]"
                        type="search"
                        name="q"
                    />
                    <div id="search-spinner" aria-hidden hidden={true} />
                    <div className="sr-only" aria-live="polite"></div>
                </form>
                <form method="post">
                    <button type="submit">Search</button>
                </form>
            </div>

            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}