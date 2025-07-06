import { IconBox } from "@/components/common";

export function SearchForm() {
    //TODO should implement Form
    return (
        <div className="border-2 border-green-200 rounded-lg max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
            <form name="search-form" action="#" className="flex items-center">
                <input type="text" name="search-text" placeholder="search for items"
                    className="text-sm text-gray-400 w-full py-[15px] focus:outline-none"
                />
                <button type="submit"><IconBox icon={'icon-search'} /></button>
            </form>
        </div>
    );
}
