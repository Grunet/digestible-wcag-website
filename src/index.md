---json
{
    "layout": "index.11ty.js",
    "images": {
        "mobileEmailPreview": {
            "path": "/images/mobileEmailPreview.png",
            "alt": "Preview of one of the emails in Gmail on Android. Sender is \"WCAG of the Day\", subject is \"Sensory Characteristics - 1.3.3\", and the preview text is the beginning of the success criterion's text, reading \"Instructions provided for understanding...\""
        }
    }
}
---

# WCAG of the Day

## What is this?

Just like those "Word of the Day" email services you can subscribe to, this will send you a very brief email about a random [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) success criterion each day.

{% ImageProcessingShortcode images.mobileEmailPreview.path, images.mobileEmailPreview.alt %}

You can check out the full content of this particular email in your browser by following [this link](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Grunet/digestible-wcag-sc-emails/master/dist/1-3-3.html) (to preview the emails for other success criteria, change the last 3 numbers in the URL to match those of the success criterion you're interested in).

## Why was it made?

I found (and still find) WCAG kind of hard to read and understand, and as a result I avoided trying to read it for myself.

This service was made to help keep me engaged in trying to understand the criteria directly, one at a time, and make them a little easier to grok too.

## How do I sign up?

Follow [this link](/subscribe), submit your email address, and then verify its yours via the confirmation email. The emails should then arrive once daily around 11 AM UTC.

## How can I give feedback?

You've got a few options:

- Reply to one of the daily emails
- [Tweet at or message me on Twitter](https://twitter.com/__grunet)
- [Chat or message me on Reddit](https://www.reddit.com/user/__grunet)
- [Write up an issue on Github](https://github.com/Grunet/digestible-wcag/issues)
