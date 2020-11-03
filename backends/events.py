import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']


def google_cal_APIs_authorization():
    """ Authorizes Google Calendar API with client_secret.json,
    creates credentials_with_refresh_token.pickle with access and refresh tokens
    when the authorization flow completes for the firsttime; 
    access token from credentials.pickle is used then further """

    creds = None

    # if valid access token from credentials_token.pickle
    if os.path.exists('credentials.pickle'):
        with open('credentials.pickle', 'rb') as token:
            creds = pickle.load(token)

    # if invalid access token use refresh_token to get new access token
    if not creds or creds and creds.expired or not creds.valid:
        if os.path.exists('credentials_with_refresh_token.pickle'):
            with open('credentials_with_refresh_token.pickle', 'rb') as token:
                creds = pickle.load(token)
            print('refreshing')
            creds.refresh(Request())    

        # if accessing 1st time
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                    'client_secret.json', SCOPES)
            creds = flow.run_local_server(port=0)

            # Save the credentials with refresh_pickle
            with open('credentials_with_refresh_token.pickle', 'wb') as token:
                pickle.dump(creds, token)

        # Save the credentials with access token without refresh_token
        with open('credentials.pickle', 'wb') as token:
            pickle.dump(creds, token)

    return creds


def get_google_cal_events():
    """ Calls the Calendar API with access token,
    returns 5 upcoming events as list """

    creds = google_cal_APIs_authorization()
    service = build('calendar', 'v3', credentials=creds)
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
    print('Getting the upcoming 5 events')
    events_result = service.events().list(calendarId='primary', timeMin=now,
                                        maxResults=5, singleEvents=True,
                                        orderBy='startTime').execute()
    events = events_result.get('items', [])

    if not events:
        print('No upcoming events found.')
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        print(start, event['summary'])

    return events