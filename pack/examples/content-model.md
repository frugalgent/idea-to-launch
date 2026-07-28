<!-- From Chapter 13 of "Idea to Launch" (The Builders Handbook, Book One) — fglabs.co -->

# Content Model — Marisol's Kitchen

## The shape test
Spreadsheet-shaped (rows, consistent fields) → Airtable.
Story-shaped (paragraphs, images, byline) → Sanity. Ties go to Airtable.

## Airtable: Menu table
Name (text) · Description (text) · Price (number) · Category (single select) ·
Photo (attachment) · Available (checkbox)
RULES: render Available=true only; group by Category; missing Photo → text-only card (nuances.md)

## Airtable: Requests table (reservations — Ch. 14)
Date · Time · Party size · Name · Contact · Confirmed (checkbox)
RULES: written by the form Worker only, with a write-scoped key; owner confirms manually

## Sanity: post schema
title · publishDate · mainImage · body
RULES: published posts only, newest first; zero posts → empty state in brand voice

## Standing rules
- ALL content fetched at BUILD time. Never per-visitor.
- Keys: scoped, least-privilege, env vars only (security.md)
- Deploy hooks: content save → rebuild → live in ~a minute
- Client edits rows/posts freely; field & schema changes go through me, never the client
