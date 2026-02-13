import { Injectable } from '@angular/core';
import { SupportType } from '../models/support-type.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private supportTypes: SupportType[] = [
    {
      id: 'physical',
      title: 'Physical Help',
      description: 'Physical assistance and therapy for elderly who need help with mobility and daily activities.',
      icon: 'heart-hand',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2568&auto=format&fit=crop',
      details: [
        'Assist with walking and mobility exercises.',
        'Help with physiotherapy sessions.',
        'Provide support for daily exercises.',
        'Accompany to parks or short walks.'
      ]
    },
    {
      id: 'medical',
      title: 'Medical Help',
      description: 'Health checkups, medicines, and treatment support to ensure their well-being.',
      icon: 'medical-cross',
      image: 'https://images.unsplash.com/photo-1584515933487-9bfa67037e96?q=80&w=2669&auto=format&fit=crop',
      details: [
        'Sponsor monthly medicines.',
        'Fund cataract or other essential surgeries.',
        'Organize health checkup camps.',
        'Donate medical equipment like wheelchairs or walkers.'
      ]
    },
    {
      id: 'food',
      title: 'Food Support',
      description: 'Sponsor daily meals or special treats for festivals and birthdays.',
      icon: 'cake',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop',
      details: [
        'Sponsor a day\'s meal for all residents.',
        'Donate groceries and essential food items.',
        'Sponsor specific dietary supplements.',
        'Celebrate your birthday by feeding the elderly.'
      ]
    },
    {
      id: 'emotional',
      title: 'Emotional & Social Support',
      description: 'Spend time, play games, and share stories to combat loneliness.',
      icon: 'chat-bubble',
      image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2656&auto=format&fit=crop',
      details: [
        'Visit and spend quality time chatting.',
        'Organize game nights or cultural activities.',
        'Read books or newspapers to them.',
        'Celebrate festivals together.'
      ]
    },
    {
      id: 'clothes',
      title: 'Clothes & Daily Needs',
      description: 'Provide clothes, toiletries, and daily essentials for their comfort.',
      icon: 'shopping-bag',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop',
      details: [
        'Donate clean, comfortable clothes.',
        'Provide winter wear like sweaters and blankets.',
        'Supply toiletries like soap, toothpaste, oil.',
        'Donate adult diapers or other hygiene products.'
      ]
    }
  ];

  constructor() { }

  getAllSupportTypes(): Observable<SupportType[]> {
    return of(this.supportTypes);
  }

  getSupportTypeById(id: string): Observable<SupportType | undefined> {
    const type = this.supportTypes.find(t => t.id === id);
    return of(type);
  }
}
