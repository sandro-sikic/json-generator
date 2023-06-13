import Header from '~/components/Header';
import Input from '~/components/Input';
import Pre from '~/components/Pre';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';
import Fieldset from '~/components/Fieldset';
import { copyToClipboard, fileImport, fileExport } from '~/plugins/common';
import { createEffect, createSignal, For } from 'solid-js';

export default () => {
	const [copyText, setCopyText] = createSignal('Copy');
	const [showInsert, setShowInsert] = createSignal(false);
	const [isInvalid, setIsInvalid] = createSignal(false);

	const defaultEvent = {
		id: '',
		name: '',
		event_name: '',
		event_campaign_id: '',
		start_date_time: '',
		end_date_time: '',
		coordinates: {
			latitude: '',
			longitude: '',
		},
		checkin_default_button_text: '',
		checkin_notification_pause_period_hours: '',
		checkin_nearby_geofence_radius_meters: '',
		checkin_nearby_notification_text: '',
		checkin_nearby_button_text: '',
		checkin_event_geofence_radius_meters: '',
		checkin_event_notification_text: '',
		checkin_event_button_text: '',
	};

	const [events, setEvents] = createSignal(
		{
			event_locations: [{ ...defaultEvent }],
		},
		{ equals: false }
	);

	createEffect(() => {
		document.getElementById('pre').innerHTML = JSON.stringify(
			events(),
			null,
			2
		);
	});

	function addEvent() {
		const event_locations = events().event_locations;
		event_locations.push({ ...defaultEvent });
		setEvents({ ...events() });
	}

	function removeEvent(index) {
		const event_locations = events().event_locations;
		event_locations.splice(index(), 1);
		setEvents({ ...events() });
	}

	return (
		<div>
			<Header />

			<main className="container mx-auto px-3 py-10">
				<h1 className="text-2xl mb-10">Events generator</h1>

				<div className="flex gap-6 ">
					<div className="flex-grow w-1/2">
						<For each={events().event_locations}>
							{(event, index) => (
								<Fieldset legend="Event" className="mt-5">
									<div className="flex gap-5">
										<div className="flex-grow">
											<h2 className="text-xl text-bold">
												{events().event_locations[index()]?.name ||
													'Event name'}
											</h2>

											<Input
												label="ID"
												value={event.id}
												onInput={(e) => {
													event.id = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Name"
												value={event.name}
												onInput={(e) => {
													event.name = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Event name"
												value={event.event_name}
												onInput={(e) => {
													event.event_name = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Event campaign id"
												value={event.event_campaign_id}
												onInput={(e) => {
													event.event_campaign_id = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Start datetime"
												value={event.start_date_time}
												onInput={(e) => {
													event.start_date_time = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="End datetime"
												value={event.end_date_time}
												onInput={(e) => {
													event.end_date_time = e;
													setEvents({ ...events() });
												}}
											/>

											<h2 className="mt-5 text-lg">Coordinates</h2>
											<Input
												label="Latitude"
												value={event.coordinates.latitude}
												onInput={(e) => {
													event.coordinates.latitude = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Longitude"
												value={event.coordinates.longitude}
												onInput={(e) => {
													event.coordinates.longitude = e;
													setEvents({ ...events() });
												}}
											/>
										</div>

										<div className="flex-grow">
											<h2 className="text-lg">Check in</h2>
											<Input
												label="Default button text"
												value={event.checkin_default_button_text}
												onInput={(e) => {
													event.checkin_default_button_text = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Notification pause period hours"
												value={event.checkin_notification_pause_period_hours}
												onInput={(e) => {
													event.checkin_notification_pause_period_hours = e;
													setEvents({ ...events() });
												}}
											/>

											<h3 className="mt-5 text-lg">Nearby</h3>
											<Input
												label="Geofence radius meters"
												value={event.checkin_nearby_geofence_radius_meters}
												onInput={(e) => {
													event.checkin_nearby_geofence_radius_meters = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Notification title"
												value={event.checkin_nearby_notification_text}
												onInput={(e) => {
													event.checkin_nearby_notification_text = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Button text"
												value={event.checkin_nearby_button_text}
												onInput={(e) => {
													event.checkin_nearby_button_text = e;
													setEvents({ ...events() });
												}}
											/>

											<h3 className="mt-5 text-lg">Event</h3>

											<Input
												label="Geofence radius meters"
												value={event.checkin_event_geofence_radius_meters}
												onInput={(e) => {
													event.checkin_event_geofence_radius_meters = e;
													setEvents({ ...events() });
												}}
											/>
											<Input
												label="Notification text"
												value={event.checkin_event_notification_text}
												onInput={(e) => {
													event.checkin_event_notification_text = e;
													setEvents({ ...events() });
												}}
											/>

											<Input
												label="Button text"
												value={event.checkin_event_button_text}
												onInput={(e) => {
													event.checkin_event_button_text = e;
													setEvents({ ...events() });
												}}
											/>

											<Button
												onClick={() => removeEvent(index)}
												className="mt-4"
											>
												Remove
											</Button>
										</div>
									</div>
								</Fieldset>
							)}
						</For>
						<Button className="mt-5" onClick={addEvent}>
							Add Event
						</Button>
					</div>
					<div className="flex-grow-0 w-1/2">
						<Fieldset legend="Actions" className="flex flex-col gap-4">
							<div className="flex gap-4">
								<label className="bg-gray-700 hover:bg-gray-900 text-sm text-white font-bold py-1 px-4 rounded">
									<input
										type="file"
										className="hidden"
										accept=".json"
										onChange={(event) => {
											fileImport(event, setEvents);
										}}
									/>
									Import
								</label>
								<Button
									onClick={() => {
										fileExport(
											'event_locations.json',
											JSON.stringify(events(), null, 2)
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
										copyToClipboard(JSON.stringify(events()));
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
											setEvents(JSON.parse(text));
										} catch (error) {
											setIsInvalid(true);
										}
									}}
									className={isInvalid() ? 'bg-red-100' : ''}
								/>
							)}
						</Fieldset>
						<Fieldset legend="JSON" className="bg-gray-100">
							<Pre id="pre">{JSON.stringify({})}</Pre>
						</Fieldset>
					</div>
				</div>
			</main>
		</div>
	);
};
