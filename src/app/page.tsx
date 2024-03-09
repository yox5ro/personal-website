import H2 from "@/components/h2";
import Li from "@/components/li";
import Link from "@/components/link";

export default function Home() {
	return (
		<main className="font-mono flex justify-center bg-gradient-to-r from-gray-50 to-gray-400 min-h-screen items-center px-8 tracking-wider">
			<div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl">yox5ro</h1>
					<span>Yoshihiro Koyama</span>
					<span>Graduate Student / Software Engineer</span>
				</div>
				<div>
					<H2 title="Links" className="mt-8" />
					<ul className="flex flex-col">
						<Li>
							<Link
								href="https://github.com/yox5ro"
								serviceName="GitHub"
								userName="yox5ro"
							/>
						</Li>
						<Li>
							<Link
								href="https://x.com/yox5ro"
								serviceName="X"
								userName="yox5ro"
							/>
						</Li>
						<Li>
							<Link
								href="https://www.linkedin.com/in/yox5ro/"
								serviceName="Linkedin"
								userName="Yoshihiro Koyama"
							/>
						</Li>
					</ul>
					<H2 title="Work Experiences" className="mt-8" />
					<ul>
						<Li>Software Engineer at Digeon Inc., part-time, 2021-Present</Li>
					</ul>
					<H2 title="Educations" className="mt-8" />
					<ul>
						<Li>
							Master of Agricultural Science at Kobe University, 2023-Present
						</Li>
						<Li>
							Bachelor of Agricultural Science at Kobe University, 2019-2023
						</Li>
					</ul>
				</div>
			</div>
		</main>
	);
}
