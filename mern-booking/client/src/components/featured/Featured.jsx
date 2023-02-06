import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
	const { data, loading, error } = useFetch('/hotels/countByCity?cities=berlin,madrid,london');

	return (
		<div className="featured">
			{loading ? (
				'Loading, please wait...'
			) : (
				<>
					<div className="featuredItem">
						<img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd49cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
						alt="Berlin"
						className="featuredImg" />
						<div className="featuredTitles">
							<h1>Berlin</h1>
							<h2>{data[0]} properties</h2>
						</div>
					</div>

					<div className="featuredItem">
						<img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" 
						alt="Madrid"
						className="featuredImg" />
						<div className="featuredTitles">
							<h1>Madrid</h1>
							<h2>{data[1]} properties</h2>
						</div>
					</div>

					<div className="featuredItem">
						<img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
						alt="London"
						className="featuredImg" />
						<div className="featuredTitles">
							<h1>London</h1>
							<h2>{data[2]} properties</h2>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Featured;