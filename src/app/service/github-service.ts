import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private apiUrl = 'https://api.github.com';

    constructor(private http: HttpClient) { }

    updateFile(owner: string, repo: string, path: string, content: string, sha: string, message: string, token: string): Observable<any> {
        const url = `${this.apiUrl}/repos/${owner}/${repo}/contents/${path}`;
        const headers = new HttpHeaders({
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
        });
        const body = {
            message: message,
            content: content,
            sha: sha
        };

        return this.http.put(url, body, { headers });
    }

    getFile(owner: string, repo: string, path: string, token: string): Observable<any> {
        const url = `${this.apiUrl}/repos/${owner}/${repo}/contents/${path}`;
        const headers = new HttpHeaders({
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
        });

        return this.http.get(url, { headers });
    }
}