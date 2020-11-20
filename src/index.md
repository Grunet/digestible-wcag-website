---
{
  "layout": "index.11ty.js",
  "images":
    {
      "mobileEmailPreview":
        {
          "path": "/images/mobileEmailPreview.png",
          "alt": 'Preview of one of the emails in Gmail on Android. Sender is "WCAG of the Day", subject is "Sensory Characteristics - 1.3.3", and the preview text is the beginning of the success criterion''s text, reading "Instructions provided for understanding..."',
        },
    },
}
---

# WCAG of the Day

## What is this?

It's like those "Word of the Day" email services, but for the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) instead. Each day it sends out a short summary of a different success criterion.

{% ImageProcessingShortcode images.mobileEmailPreview.path, images.mobileEmailPreview.alt %}

To check out this email's contents in your browser, follow [this link](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Grunet/digestible-wcag-sc-emails/master/dist/1-3-3.html). To switch the success criterion, change the last 3 numbers in the URL accordingly.

## Why was it made?

I found (and still find) WCAG kind of hard to read and understand. This made me avoid trying to read it for myself.

To help keep myself engaged in trying to understand WCAG, I made this. Starting with a small email each day was a lot less daunting for me to tackle.

## How do I sign up?

1. Follow [this link](/subscribe)
2. Submit your email address
3. Verify it's yours via the confirmation email
4. At a little after 11:00 AM UTC, search for an email from "WCAG of the Day"

## How can I give feedback? {#feedback-section}

You've got a few options:

- Reply to one of the daily emails
- [Tweet at or message me on Twitter](https://twitter.com/__grunet)
- [Chat or message me on Reddit](https://www.reddit.com/user/__grunet)
- [Write up an issue on GitHub](https://github.com/Grunet/digestible-wcag/issues)

## Other questions:

### Why the Halloween theme?

I co-opted some of the [WCAG website](https://www.w3.org/TR/WCAG/)'s styles and then inverted the colors. I figured that would result in something intriguing yet accessible. Orange is also my favorite color so there's that too.

### Do you have an accessibility statement?

You're looking at it. This applies to both this website and the service.

If you run into any accessibility hurdles with either, please contact me through [one of the above options](#feedback-section).

I aim to treat them like I would any equivalent able-only issues.
