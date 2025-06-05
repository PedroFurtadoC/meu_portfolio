const width = 800;

export default function CurvedTimeline() {
	const blocks = [0, 1, 2, 3];

	return (
		<div className="w-full py-20 px-20">
			{blocks.map((item, index, arr) => (
				<div
					className="flex flex-col items-center justify-center"
					key={"path" + index}
				>
					<div
						style={{
							transform:
								index % 2 === 0
									? `translateX(${-((width * 0.7) / 2)}px)`
									: `translateX(${(width * 0.7) / 2}px)`,
							width: `${width}px`,
						}}
						className={`aspect-[20/10] border-dashed border-[6px] border-muted bg-background rounded-xl m-[-10px] flex items-center justify-center text-white font-bold`}
					></div>
					{index < arr.length - 1 ? (
						<>
							<svg
								style={
									index % 2 !== 0
										? { transform: "scale(-1,1)" }
										: {}
								}
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 800 800"
								height={300}
								width={width * 0.8}
								preserveAspectRatio="none"
							>
								<g
									strokeWidth="10"
									stroke="#ff6b6b"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeDasharray="35.5 26"
									transform="matrix(1,0,0,1,7,20)"
								>
									<path
										d="M11.5 11.5Q12.5 380.5 400 400Q788.5 403.5 788.5 788.5 "
										markerEnd="url(#SvgjsMarker4412)"
									></path>
								</g>
								<defs>
									<marker
										markerWidth="1"
										markerHeight="1"
										refX="0.5"
										refY="0.5"
										viewBox="0 0 1 1"
										orient="auto"
										id="SvgjsMarker4412"
									>
										<polygon
											points="0,1 0,0 1,0.5"
											fill="hsl(227, 71%, 57%)"
										></polygon>
									</marker>
								</defs>
							</svg>
							{/* <svg
							style={
								index % 2 !== 0
									? { transform: "scale(-1,1)" }
									: {}
							}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 100"
							className="text-blue-500"
							fill="none"
							height={150}
							width={150}
							preserveAspectRatio="none"
						>
							<path
								d="M80.077341,61.222485c-.008873,13.731048,3.527255,28.401641,18.537049,38.09774s42.151691,7.795448,58.31666,20.441917s21.124533,28.626993,21.124533,41.460343"
								transform="translate(-79.069576-61.222485)"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg> */}
						</>
					) : null}
				</div>
			))}
		</div>
	);
}
