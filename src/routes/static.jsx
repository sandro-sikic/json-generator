import Button from '~/components/Button';
import Fieldset from '~/components/Fieldset';
import Header from '~/components/Header';
import Input from '~/components/Input';
import Pre from '~/components/Pre';
import Select from '~/components/Select';
import TextArea from '~/components/TextArea';
import { copyToClipboard, fileImport, fileExport } from '~/plugins/common';
import { createEffect, createSignal, For } from 'solid-js';

export default () => {
	const [copyText, setCopyText] = createSignal('Copy');
	const [showInsert, setShowInsert] = createSignal(false);
	const [isInvalid, setIsInvalid] = createSignal(false);

	const [generated, setGenerated] = createSignal(
		{
			card_content: {
				image_url: '',
				image_alt_text: '',
				share_url: '',
				event_name: '',
				title_copy: '',
				body_copy: '',
				btn_group: [],
			},
		},
		{ equals: false }
	);

	createEffect(() => {
		document.getElementById('pre').innerHTML = JSON.stringify(
			generated(),
			null,
			2
		);
	});

	function addCta() {
		const btn_group = generated().card_content.btn_group;
		btn_group.push({
			id: '',
			title: '',
			event_name: '',
			data: '',
			type: 'WEBSITE',
			style: 'VIEW01.v01',
		}),
			setGenerated({
				...generated(),
			});
	}

	function removeCTA(index) {
		const btn_group = generated().card_content.btn_group;
		btn_group.splice(index(), 1);

		setGenerated({
			...generated(),
		});
	}

	return (
		<div>
			<Header />

			<main className="container mx-auto flex flex-col gap-6 py-10 px-3">
				<h1 className="text-2xl mb-10">Static card generator</h1>

				<div className="flex gap-4">
					<div className="w-1/2">
						<Fieldset legend="Card content" className="flex flex-col gap-4">
							<div className="flex gap-4 items-end">
								<Input
									label="Image URL"
									value={generated().card_content.image_url}
									onInput={(e) => {
										const card_content = generated().card_content;
										card_content.image_url = e;
										setGenerated({ ...generated() });
									}}
									className="flex-grow"
								/>
								{generated().imageUrl && (
									<img
										className="w-14 h-14 rounded object-cover"
										src={generated().card_content.image_url}
										alt={generated().card_content.image_alt_text}
									/>
								)}
							</div>
							<Input
								label="Image alt text"
								value={generated().card_content.image_alt_text}
								onInput={(e) => {
									const card_content = generated().card_content;
									card_content.image_alt_text = e;
									setGenerated({ ...generated() });
								}}
							/>

							<Input
								label="Share url"
								value={generated().card_content.share_url}
								onInput={(e) => {
									const card_content = generated().card_content;
									card_content.share_url = e;
									setGenerated({ ...generated() });
								}}
							/>

							<Input
								label="Event name"
								value={generated().card_content.event_name}
								onInput={(e) => {
									const card_content = generated().card_content;
									card_content.event_name = e;
									setGenerated({ ...generated() });
								}}
							/>

							<Input
								label="Title"
								value={generated().card_content.title_copy}
								onInput={(e) => {
									const card_content = generated().card_content;
									card_content.title_copy = e;
									setGenerated({ ...generated() });
								}}
							/>

							<TextArea
								label="Body"
								value={generated().card_content.body_copy}
								onInput={(e) => {
									const card_content = generated().card_content;
									card_content.body_copy = e;
									setGenerated({ ...generated() });
								}}
							/>
						</Fieldset>

						<Fieldset legend="Call to action">
							<Button onClick={addCta}>Add CTA</Button>

							<For each={generated().card_content.btn_group}>
								{(btn, index) => (
									<div className="border rounded p-4 my-5 flex flex-col gap-4">
										<Input
											label="ID (Number)"
											value={btn.id}
											onInput={(e) => {
												const btn_group = generated().card_content.btn_group;
												btn_group[index()].id = e;

												setGenerated({
													...generated(),
												});
											}}
										/>
										<Input
											label="Title"
											value={btn.title}
											onInput={(e) => {
												const btnGroup = generated().card_content.btn_group;
												btnGroup[index()].title = e;

												setGenerated({
													...generated(),
												});
											}}
										/>
										<Input
											label="Event name"
											value={btn.event_name}
											onInput={(e) => {
												const btn_group = generated().card_content.btn_group;
												btn_group[index()].event_name = e;

												setGenerated({
													...generated(),
												});
											}}
										/>
										<Input
											label="Data "
											value={btn.data}
											onInput={(e) => {
												const btn_group = generated().card_content.btn_group;
												btn_group[index()].data = e;

												setGenerated({
													...generated(),
												});
											}}
										/>
										<Select
											label="Type"
											value={btn.type}
											options={[{ label: 'WEBSITE', value: 'WEBSITE' }]}
											onChange={(e) => {
												console.log(e);
												const btn_group = generated().card_content.btn_group;
												btn_group[index()].type = e;

												setGenerated({
													...generated(),
												});
											}}
										/>
										<Select
											label="Style"
											value={btn.style}
											options={[{ label: 'VIEW01.v01', value: 'VIEW01.v01' }]}
										/>

										<div className="flex justify-between">
											<Button
												onClick={() => {
													const btn_group = generated().card_content.btn_group;
													btn_group.push(btn_group[index()]);

													setGenerated({
														...generated(),
													});
												}}
											>
												Duplicate
											</Button>
											<Button onClick={() => removeCTA(index)}>Remove</Button>
										</div>
									</div>
								)}
							</For>
						</Fieldset>
					</div>
					<div className="w-1/2">
						<Fieldset legend="Actions" className="flex flex-col gap-4">
							<div className="flex gap-4">
								<label className="bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-1 px-4 rounded">
									<input
										type="file"
										className="hidden"
										accept=".json"
										onChange={(event) => {
											fileImport(event, setGenerated);
										}}
									/>
									Import
								</label>
								<Button
									onClick={() => {
										fileExport(
											'static-card.json',
											JSON.stringify(generated(), null, 2)
										);
									}}
								>
									Export
								</Button>

								<Button onClick={() => setShowInsert(!showInsert())}>
									Insert
								</Button>
								<Button
									onClick={() => {
										setCopyText('Copied!');
										copyToClipboard(JSON.stringify(generated()));
										setTimeout(() => {
											setCopyText('Copy');
										}, 2000);
									}}
								>
									{copyText}
								</Button>
							</div>
							{showInsert() && (
								<TextArea
									value={''}
									onInput={(text) => {
										try {
											setIsInvalid(false);
											setGenerated(JSON.parse(text));
										} catch (error) {
											setIsInvalid(true);
										}
									}}
									className={isInvalid() ? 'bg-red-100' : ''}
								/>
							)}
						</Fieldset>
						<Fieldset legend="JSON" className="bg-gray-100">
							<Pre id="pre" />
						</Fieldset>
					</div>
				</div>
			</main>
		</div>
	);
};
