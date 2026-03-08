import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async getDashboardStats() {
    const totalUsers = await this.usersRepository.count();
    const totalProducts = await this.productsRepository.count();
    const totalOrders = await this.ordersRepository.count();

    return {
      totalUsers,
      totalProducts,
      totalOrders,
    };
  }

  async getAllUsers() {
    return await this.usersRepository.find();
  }

  async getAllProducts() {
    return await this.productsRepository.find();
  }

  async getAllOrders() {
    return await this.ordersRepository.find({ relations: ['user'] });
  }
}