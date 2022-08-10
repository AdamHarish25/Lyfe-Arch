import {
    BigPlayButton,
    ControlBar,
    LoadingSpinner,
    Player,
    PlayToggle,
    VolumeMenuButton,
} from "video-react";

export default function Video({ src, height, width }) {
    return <div className="flex items-center h-auto w-screen py-10 px-5 md:px-20 lg:px-10">
        <div className="w-full h-full flex justify-center">

            <div
                id="ProductVideo"
                className={`${width} shadow-xl h-auto bg-slate-900 rounded-xl grid place-items-center`}
            >
                <Player src={src} className={`relative w-full ${height} bg-transparent group`} fluid={false} startTime={0}>
                    <LoadingSpinner />
                    <BigPlayButton className="w-0 h-0 px-10 py-6 group-hover:ring-white ring-2 ring-transparent transform duration-200 bg-blue-600 text-white rounded-full border-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" />
                    <ControlBar className="absolute bottom-2 left-2/4 -translate-x-2/4 w-72 sm:w-100 md:w-110 lg:w-115 2xl:w-128 rounded-xl md:rounded-lg" autoHide={true} autoHideTime={1000}>
                        <VolumeMenuButton vertical />
                        <PlayToggle />
                    </ControlBar>
                </Player>
            </div>
        </div>
    </div>
}