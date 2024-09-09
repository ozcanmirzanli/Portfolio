import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide
})
export class LinkService {
  activeLink: string = '';

  setActiveLink(link: string, links: { href: string; text: string }[]) {
    // Check if the link is one of the predefined links
    const isPredefinedLink = links.some((l) => l.href === link);
    this.activeLink = isPredefinedLink ? link : '';
  }

  getActiveLink(): string {
    return this.activeLink; // Get the currently active link
  }
}
