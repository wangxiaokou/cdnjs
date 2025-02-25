import { NDArrayMath } from '../../math/math';
import { Optimizer } from '../../math/optimizers/optimizer';
import { NamedVariableMap } from '../../util';
import { Node } from '../graph';
import { SessionRuntime } from '../session';
import { SummedTensorArrayMap, TensorArrayMap } from '../tensor_array_map';
export declare class AdamOptimizer extends Optimizer {
    protected learningRate: number;
    private beta1;
    private beta2;
    constructor(learningRate: number, beta1: number, beta2: number, specifiedVariableList?: Node[]);
    applyGradients(variableGradients: NamedVariableMap): void;
    beforeBatch(math: NDArrayMath, batchSize: number, runtime: SessionRuntime, activationArrayMap: TensorArrayMap, gradientArrayMap: SummedTensorArrayMap): void;
    afterBatch(math: NDArrayMath, batchSize: number, runtime: SessionRuntime, activationArrayMap: TensorArrayMap, gradientArrayMap: SummedTensorArrayMap): void;
    dispose(): void;
    private firstMoment;
    private secondMoment;
    private eps;
    private b1;
    private b2;
    private accB1;
    private accB2;
}
